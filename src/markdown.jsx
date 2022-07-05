import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Markdown() {
  const md = `# Header *emphasis* \n\n linebreak`;

  return (
    <div className="App">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
    </div>
  );
}

export default Markdown;
