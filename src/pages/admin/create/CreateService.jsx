import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-markdown-editor-lite/lib/index.css";
import UploadSingle from "../../../components/admin/UploadSingle";
import TextEditor from "../../../components/admin/TextEditor";
import TextArea from "antd/es/input/TextArea";
import { createPost } from "../../../service/post.service";
import React, { useEffect, useRef, useState } from "react";
import { Tabs, Input } from "antd";
import useDataActions from "../../../hooks/useDataActions";

const { TabPane } = Tabs;

const initialItems = [
  {
    label: "Tab 1",
    children: "Content of Tab 1",
    key: "1",
  },
  {
    label: "Tab 2",
    children: "Content of Tab 2",
    key: "2",
  },
  {
    label: "Tab 3",
    children: "Content of Tab 3",
    key: "3",
  },
];
const CreateService = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const [newTabName, setNewTabName] = useState("New Tab");

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: newTabName,
      children: `Content of ${newTabName}`,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] p-4">
        <Tabs
          className=""
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
        >
          {items.map((item) => (
            <TabPane
              className=""
              tab={item.label}
              key={item.key}
              closable={item.closable}
            >
              {item.children}
            </TabPane>
          ))}
          <TabPane
            tab={
              <Input
                defaultValue={newTabName}
                onChange={(e) => setNewTabName(e.target.value)}
              />
            }
            key="newTab"
            closable={false}
          />
        </Tabs>
      </div>
    </>
  );
};

export default CreateService;
