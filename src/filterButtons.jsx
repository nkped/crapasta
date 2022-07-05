import { getAllSubjects, getAllBlogPosts } from "./data";
import { useSearchParams } from "react-router-dom";
import reactMarkdown from "react-markdown";

const allSubjects = getAllSubjects();

console.log(allSubjects);

export function FilterButtons() {
  const [searchParams, setSearchParams] = useSearchParams();

  let showReactBlogposts = searchParams.get("subject") === "react";
  let showGitBlogposts = searchParams.get("subject") === "git";

  const subjects = ["react", "git"];

  let btn = subjects.map((subject) => <button key={subject}>{subject}</button>);

  return (
    <div>
      <div>{btn}</div>
      {showReactBlogposts ? <p>blogposts about react</p> : <p>No reactposts</p>}
      {showGitBlogposts ? <p>blogposts about react</p> : <p>No gitposts</p>}
    </div>
  );
}

/*  const uniqueSubjects = [...new Set(allSubjects)];

const showButtonSubjects = searchParams.get("filter" === "subject");

const subjectButtons = uniqueSubjects.map((subject) => (
  <button
    key={subject}
    onClick={() => setSearchParams({ filter: "subject" })}
  >
    {subject}
  </button>
));

const resetButton = (
  <button onClick={() => setSearchParams({})}>Reset</button>
);
return (
  <div>
    {subjectButtons}
    {resetButton}
  </div>
*/
