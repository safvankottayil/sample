import React, { useState } from "react";
import { useSlate, ReactEditor } from "slate-react";
import { Editor,  Transforms ,Element as SlateElement } from "slate";
import Button from "./Button";
const defaultToolbarGroups = [
  [
    {
      id: 1,
      format: "bold",
      type: "mark",
    },
    {
      id: 2,
      format: "italic",
      type: "mark",
    },
    {
      id: 3,
      format: "underline",
      type: "mark",
    },
    // {
    //   id: 4,
    //   format: "strikethrough",
    //   type: "mark",
    // },
  ],
  [
    // {
    //     id:6,
    //     format:'orderedList',
    //     type:'block'
    // },
    {
        id:7,
        format:'unorderedList',
        type:'block'
    }
],
];
const alignment = ['alignLeft','alignRight','alignCenter']
const list_types = ['orderedList','unorderedList']

export default function Toolbar() {
  const editor = useSlate();
  const [toolbarGroups, setToolbarGroups] = useState(defaultToolbarGroups);

  const toggleBlock = (editor,format)=>{   
    const isActive = isBlockActive(editor,format);
    const isList = list_types.includes(format)
    const isIndent = alignment.includes(format)
    const isAligned = alignment.some(alignmentType => isBlockActive(editor,alignmentType))


    /*If the node is already aligned and change in indent is called we should unwrap it first and split the node to prevent
    messy, nested DOM structure and bugs due to that.*/
    if(isAligned && isIndent){
        Transforms.unwrapNodes(editor,{
            match:n => alignment.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
            split:true
        })
    }


    /* Wraping the nodes for alignment, to allow it to co-exist with other block level operations*/
    if(isIndent){
        Transforms.wrapNodes(editor,{
            type:format,
            children:[]
        })
        return
    }
    Transforms.unwrapNodes(editor,{
        match:n => list_types.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
        split:true
    })
   


    Transforms.setNodes(editor,{
        type:isActive?'paragraph':isList?'list-item':format,
    })

   
    if(isList && !isActive){
        Transforms.wrapNodes(editor,{
            type:format,
            children:[]
        })
    }

    
    
    
}

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
    ReactEditor.focus(editor);
  };
  const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });

    return !!match;
  };

  const BlockButton = ({ format }) => {
    return (
      <Button
        active={isBlockActive(editor, format)}
        format={format}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {format}
      </Button>
    );
  };

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };
  const MarkButton = ({ format }) => {
    return (
      <Button
        active={isMarkActive(editor, format)}
        format={format}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {format}
      </Button>
    );
  };
  return (
    <div className=" flex items-center w-fit ">
      {toolbarGroups.map((group, index) => (
        <span key={index} className="flex w-fit">
          {group.map((element) => {
            switch (element.type) {
                case 'block' :
                    return <BlockButton key={element.id} {...element}/>
              case "mark":
                return <MarkButton key={element.id} {...element} />;
              default:
                return <button>Invalid Button</button>;
            }
          })}
        </span>
      ))}
    </div>
  );
}
