import Image from 'next/image';

const tools = [
  {
    name: "Cursor",
    icon: "/file.svg",
    type: "IDE",
    url: "https://www.cursor.so/"
  },
  {
    name: "ChatGPT",
    icon: "/globe.svg",
    type: "Productivity",
    url: "https://chat.openai.com/"
  },
  {
    name: "Notion",
    icon: "https://www.notion.so/images/logo-ios.png",
    type: "Productivity",
    url: "https://www.notion.so/"
  },
  {
    name: "Pycharm",
    icon: "https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png",
    type: "IDE",
    url: "https://www.jetbrains.com/pycharm/"
  },
  {
    name: "Slack",
    icon: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    type: "Communication",
    url: "https://slack.com/"
  },
  {
    name: "Medium",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg",
    type: "Writing",
    url: "https://medium.com/"
  }
];

export function ToolsContent() {
  return (
    <main className="ml-[20%] min-h-screen bg-white overflow-y-auto pb-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto pt-20 text-center">
        <h1 className="text-5xl font-bold mb-2">Shovels</h1>
        <p className="mb-10 text-gray-700">Tools I frequently use to make life easier</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {tools.map((tool) => (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              key={tool.name}
              className="flex w-64 h-24 items-center gap-4 bg-white rounded-2xl shadow-xl border border-gray-200 px-7 hover:shadow-2xl transition-all group focus:outline-none"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={44}
                  height={44}
                  className="rounded bg-white group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="text-left">
                <div className="font-medium text-lg text-gray-900 mb-1">{tool.name}</div>
                <div className="text-xs text-gray-500 font-normal">{tool.type}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
