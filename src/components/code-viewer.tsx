"use client";

import * as shadcnComponents from "../lib/shadcn";
import { Sandpack } from "@codesandbox/sandpack-react";
import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import dedent from "dedent";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";

export default function CodeViewer({
  code,
  showEditor = false,
}: {
  code: string;
  showEditor?: boolean;
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden ${
        isFullscreen
          ? "fixed inset-0 z-50"
          : "h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      }`}
    >
      {showEditor ? (
        <Sandpack
          options={{
            showNavigator: true,
            editorHeight: isFullscreen ? "100vh" : "calc(100vh - 4rem)",
            showTabs: false,
            ...sharedOptions,
          }}
          files={{
            "App.tsx": code,
            ...sharedFiles,
          }}
          {...sharedProps}
        />
      ) : (
        <SandpackProvider
          files={{
            "App.tsx": code,
            ...sharedFiles,
          }}
          className="flex h-full w-full grow flex-col justify-center bg-white"
          options={{ ...sharedOptions }}
          {...sharedProps}
        >
          <Tabs defaultValue="preview" className="w-full h-full">
            <div className="flex flex-col sm:flex-row justify-between items-center p-2 bg-gray-50 border-b border-gray-200">
              <TabsList className="bg-white shadow-sm w-full sm:w-auto mb-2 sm:mb-0">
                <TabsTrigger
                  value="preview"
                  className="text-xs sm:text-sm data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="text-xs sm:text-sm data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="w-full sm:w-auto"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            </div>
            <TabsContent value="preview" className="mt-0 h-full">
              <SandpackPreview
                className="flex h-full w-full grow flex-col justify-center p-2 sm:p-4 md:pt-8 lg:pt-16 bg-white"
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
              />
            </TabsContent>
            <TabsContent value="code" className="mt-0 h-full">
              <pre className="p-2 sm:p-4 bg-white text-gray-800 overflow-auto h-full font-mono text-xs sm:text-sm leading-relaxed">
                <code>{code}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </SandpackProvider>
      )}
    </div>
  );
}

const sharedProps = {
  template: "react-ts",
  theme: nightOwl,
  customSetup: {
    dependencies: {
      "lucide-react": "latest",
      recharts: "2.9.0",
      "react-router-dom": "latest",
      "@radix-ui/react-accordion": "^1.2.0",
      "@radix-ui/react-alert-dialog": "^1.1.1",
      "@radix-ui/react-aspect-ratio": "^1.1.0",
      "@radix-ui/react-avatar": "^1.1.0",
      "@radix-ui/react-checkbox": "^1.1.1",
      "@radix-ui/react-collapsible": "^1.1.0",
      "@radix-ui/react-dialog": "^1.1.1",
      "@radix-ui/react-dropdown-menu": "^2.1.1",
      "@radix-ui/react-hover-card": "^1.1.1",
      "@radix-ui/react-label": "^2.1.0",
      "@radix-ui/react-menubar": "^1.1.1",
      "@radix-ui/react-navigation-menu": "^1.2.0",
      "@radix-ui/react-popover": "^1.1.1",
      "@radix-ui/react-progress": "^1.1.0",
      "@radix-ui/react-radio-group": "^1.2.0",
      "@radix-ui/react-select": "^2.1.1",
      "@radix-ui/react-separator": "^1.1.0",
      "@radix-ui/react-slider": "^1.2.0",
      "@radix-ui/react-slot": "^1.1.0",
      "@radix-ui/react-switch": "^1.1.0",
      "@radix-ui/react-tabs": "^1.1.0",
      "@radix-ui/react-toast": "^1.2.1",
      "@radix-ui/react-toggle": "^1.1.0",
      "@radix-ui/react-toggle-group": "^1.1.0",
      "@radix-ui/react-tooltip": "^1.1.2",
      "class-variance-authority": "^0.7.0",
      clsx: "^2.1.1",
      "date-fns": "^3.6.0",
      "embla-carousel-react": "^8.1.8",
      "react-day-picker": "^8.10.1",
      "tailwind-merge": "^2.4.0",
      "tailwindcss-animate": "^1.0.7",
      vaul: "^0.9.1",
    },
  },
} as const;

const sharedOptions = {
  externalResources: [
    "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
  ],
};

const sharedFiles = {
  "/lib/utils.ts": shadcnComponents.utils,
  "/components/ui/accordion.tsx": shadcnComponents.accordian,
  "/components/ui/alert-dialog.tsx": shadcnComponents.alertDialog,
  "/components/ui/alert.tsx": shadcnComponents.alert,
  "/components/ui/avatar.tsx": shadcnComponents.avatar,
  "/components/ui/badge.tsx": shadcnComponents.badge,
  "/components/ui/breadcrumb.tsx": shadcnComponents.breadcrumb,
  "/components/ui/button.tsx": shadcnComponents.button,
  "/components/ui/calendar.tsx": shadcnComponents.calendar,
  "/components/ui/card.tsx": shadcnComponents.card,
  "/components/ui/carousel.tsx": shadcnComponents.carousel,
  "/components/ui/checkbox.tsx": shadcnComponents.checkbox,
  "/components/ui/collapsible.tsx": shadcnComponents.collapsible,
  "/components/ui/dialog.tsx": shadcnComponents.dialog,
  "/components/ui/drawer.tsx": shadcnComponents.drawer,
  "/components/ui/dropdown-menu.tsx": shadcnComponents.dropdownMenu,
  "/components/ui/input.tsx": shadcnComponents.input,
  "/components/ui/label.tsx": shadcnComponents.label,
  "/components/ui/menubar.tsx": shadcnComponents.menuBar,
  "/components/ui/navigation-menu.tsx": shadcnComponents.navigationMenu,
  "/components/ui/pagination.tsx": shadcnComponents.pagination,
  "/components/ui/popover.tsx": shadcnComponents.popover,
  "/components/ui/progress.tsx": shadcnComponents.progress,
  "/components/ui/radio-group.tsx": shadcnComponents.radioGroup,
  "/components/ui/select.tsx": shadcnComponents.select,
  "/components/ui/separator.tsx": shadcnComponents.separator,
  "/components/ui/skeleton.tsx": shadcnComponents.skeleton,
  "/components/ui/slider.tsx": shadcnComponents.slider,
  "/components/ui/switch.tsx": shadcnComponents.switchComponent,
  "/components/ui/table.tsx": shadcnComponents.table,
  "/components/ui/tabs.tsx": shadcnComponents.tabs,
  "/components/ui/textarea.tsx": shadcnComponents.textarea,
  "/components/ui/toast.tsx": shadcnComponents.toast,
  "/components/ui/toaster.tsx": shadcnComponents.toaster,
  "/components/ui/toggle-group.tsx": shadcnComponents.toggleGroup,
  "/components/ui/toggle.tsx": shadcnComponents.toggle,
  "/components/ui/tooltip.tsx": shadcnComponents.tooltip,
  "/components/ui/use-toast.tsx": shadcnComponents.useToast,
  "/public/index.html": dedent`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Code Preview</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-white text-gray-900">
        <div id="root"></div>
      </body>
    </html>
  `,
};
