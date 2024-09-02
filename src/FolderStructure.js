import "./styles.css";
import { useState } from "react";
export default function FolderStructure({
  explorer: folderExplorer,
  folderId,
}) {
  const [clickedFolderId, setClickFolderId] = useState();
  console.log(folderId, clickedFolderId);

  const onClickHandler = (id) => {
    setClickFolderId(id);
  };
  return (
    <div>
      <div
        onClick={() => onClickHandler(folderExplorer.id)}
        className={`${
          folderExplorer.isFolder ? "folder-structure" : "file-structure"
        }`}
      >
        {folderExplorer.name}
      </div>
      {clickedFolderId === folderId &&
        folderExplorer.isFolder &&
        folderExplorer.items.map((folderItem) => {
          return (
            <FolderStructure folderId={folderItem.id} explorer={folderItem} />
          );
        })}
    </div>
  );
}
