import { useActiveComponent } from "../contexts/ActiveComponentContext";

export function Information() {
  const { activeComponent } = useActiveComponent();

  const generateGitHubUrl = (path: string) => {
    const basePath =
      "https://github.com/maaaaaaaaaaaaaaaax/atlas/blob/main/src/components";
    return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  const generateStoryUrl = (path: string) => {
    const basePath =
      "https://github.com/maaaaaaaaaaaaaaaax/atlas/blob/main/src/preview/chapter";
    return `${basePath}/${path}`;
  };

  if (!activeComponent) {
    return (
      <div>
        <p className="text-white text-sm opacity-70">
          Select a component for further information
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      {activeComponent.componentUrl && (
        <a
          className={`text-white hover:underline pl-5 hover:bg-tpink w-fit hover:text-black block mb-2`}
          href={generateGitHubUrl(activeComponent.componentUrl)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Link
        </a>
      )}
      {activeComponent.implementationUrl && (
        <a
          className={`text-white hover:underline pl-5 hover:bg-tpink w-fit hover:text-black block`}
          href={generateStoryUrl(activeComponent.implementationUrl)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Implementation
        </a>
      )}
    </div>
  );
}
