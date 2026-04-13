import Image from 'next/image';

const tools = [
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    type: "Deep Learning",
    url: "https://pytorch.org/"
  },
  {
    name: "Hugging Face",
    icon: "https://huggingface.co/front/assets/huggingface_logo.svg",
    type: "LLMs",
    url: "https://huggingface.co/"
  },
  {
    name: "Google Cloud (GCP)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    type: "Cloud / MLOps",
    url: "https://cloud.google.com/"
  },
  {
    name: "BigQuery ML",
    icon: "/globe.svg",
    type: "Data / ML Pipelines",
    url: "https://cloud.google.com/bigquery"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    type: "Deployment",
    url: "https://www.docker.com/"
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    type: "Version Control",
    url: "https://github.com/"
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    type: "IDE",
    url: "https://code.visualstudio.com/"
  },
  {
    name: "Kaggle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
    type: "Experimentation",
    url: "https://www.kaggle.com/"
  }
];

export function ToolsContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto pt-20 text-center">
        
        <h1 className="text-5xl font-bold mb-2">Tools I Use</h1>

        <p className="mb-10 text-gray-700">
          Technologies I use to build, train, and deploy machine learning systems.
        </p>

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
                <div className="font-medium text-lg text-gray-900 mb-1">
                  {tool.name}
                </div>
                <div className="text-xs text-gray-500 font-normal">
                  {tool.type}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}