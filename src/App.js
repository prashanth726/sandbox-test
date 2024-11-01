import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackStack,
  SandpackLayout,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { SandpackFileExplorer } from "sandpack-file-explorer";

export default function App() {
  return (
    <SandpackProvider template="react">
      <SandpackThemeProvider theme={"light"}>
        <SandpackStack>
          <SandpackLayout>
            <div
              style={{
                display: "flex",
                width: "100%",
                minHeight: "300px",
                maxHeight: "300px",
                backgroundColor: `var(--sp-colors-surface1)`,
              }}
            >
              <div
                style={{
                  minWidth: 150,
                  maxWidth: "300px",
                  overflow: "hidden",
                }}
              >
                <SandpackFileExplorer />
              </div>
              <div style={{ flex: "min-content" }}>
                <SandpackCodeEditor
                  wrapContent
                  showRunButton
                  showTabs
                  showRefreshButton
                  showInlineErrors
                  showLineNumbers
                />
              </div>
            </div>
            <SandpackPreview
              showOpenInCodeSandbox={false}
              showNavigator={true}
              showOpenNewtab={true}
              actionsChildren={
                <button onClick={() => window.alert("Bug reported!")}>
                  Report bug
                </button>
              }
            />
            <SandpackTests verbose={false} actionsChildren={<div>sss</div>} />
          </SandpackLayout>
        </SandpackStack>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
}
