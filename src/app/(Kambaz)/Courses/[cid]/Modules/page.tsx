/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    if (!cid) return;
    try {
      const mods = await client.findModulesForCourse(cid as string);
      dispatch(setModules(mods));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchModules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={async () => {
          if (!cid) return;
          try {
            const newModule = { name: moduleName, course: cid };
            const created = await client.createModuleForCourse(cid as string, newModule);
            dispatch(setModules([...modules, created]));
            setModuleName("");
          } catch (err) {
            console.error(err);
          }
        }}
      />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  value={module.name}
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                      try {
                        const updated = { ...module, editing: false };
                        await client.updateModule(cid as string, updated);
                        const newModules = modules.map((m: any) => (m._id === updated._id ? updated : m));
                        dispatch(setModules(newModules));
                      } catch (err) {
                        console.error(err);
                      }
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={async (moduleId) => {
                  try {
                    await client.deleteModule(cid as string, moduleId);
                    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
                  } catch (err) {
                    console.error(err);
                  }
                }}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
