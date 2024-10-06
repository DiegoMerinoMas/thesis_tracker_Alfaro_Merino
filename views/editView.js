import { updatePreview } from "../js/preview.js";

export function renderEditView(content) {
  const container = document.createElement("div");
  container.className = "edit-view";

  const editorContainer = document.createElement("div");
  editorContainer.className = "editor-container";

  const editorTitle = document.createElement("h3");
  editorTitle.textContent = "Editor de Markdown";
  editorTitle.className = "editor-title";

  const editor = document.createElement("textarea");
  editor.id = "editor";
  editor.value = content || "";

  editorContainer.appendChild(editorTitle);
  editorContainer.appendChild(editor);

  const previewContainer = document.createElement("div");
  previewContainer.className = "preview-container";

  const previewTitle = document.createElement("h3");
  previewTitle.textContent = "Vista previa";
  previewTitle.className = "preview-title";

  const preview = document.createElement("div");
  preview.id = "preview";

  previewContainer.appendChild(previewTitle);
  previewContainer.appendChild(preview);

  container.appendChild(editorContainer);
  container.appendChild(previewContainer);

  // Actualizar la vista previa inmediatamente después de crear los elementos
  setTimeout(() => updatePreview(editor.value), 0);

  // Agregar un event listener para actualizar la vista previa cuando se edita
  editor.addEventListener("input", () => {
    updatePreview(editor.value);
  });

  return container;
}
