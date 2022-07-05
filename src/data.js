let blogPosts = [
  {
    number: 11,
    subject: "React-Router",
    titel: "Min hacky Nav-dropdown",
    intro:
      "Blogposts vises i global navigation-dropdown, og er lavet som dynamisk liste, der ikke kræver manuel opdatering af nav ved ny post.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 22,
    subject: "React-Boostrap",
    titel: "Føles som 'full circle'",
    intro:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 33,
    subject: "Github-Pages",
    titel: "Publiser på gh-branch!",
    intro:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 44,
    subject: "Github-Pages",
    titel: "Husk min manual",
    intro:
      "Ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 55,
    subject: "NextJS",
    titel: "Nu med database",
    intro:
      "But also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetti.",
    image: "",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 55,
    subject: "javascript",
    titel: "Emne-knapper til søgning i blogposts",
    intro:
      "Generér et unik array af blogpost-emner med map(), new Set() samt memo-hook, og rendér emne-knapper med map().",
    image: "",
    text: `På denne hjemmeside kan brugere fremsøge blog-indlæg ud fra emne via emne-knapper. Blog-skribent skriver blot emner for sin blogpost under 'subjects' under publicering, så opretter react en knap til emnet, hvis det ikke findes i forvejen (der tjekkes automatisk for dubletter).
      Hvordan bygger vi denne funtionalitet?
      Vi starter 'oven fra' altså ved funktionalitetens 'slutpunkt', nemlig genering af selve knapperne. (Når først knapperne er lavet, 'regner vi baglæns' indtil hele funktionaliteten er lavet.)
      Skriv et 'dummy'-array af blogpost-emner som fodres til map(), der skal generere vores knapper.
      //Dummy-array som vi lader som om blogskribent har oprettet
      const allSubjects = [
        "react",
        "react-bootstrap",
        "react-router",
        "react-router",
        "github",
        "github",
        "github-pages",
        "git",
      ];
      
      const subjectButtons = allSubjects.map((subject) => (
          <Button>
            {subject}
          </Button>
        ));
        return (
          <Container>
            {subjectButtons}
          </Container>
        );
      
      //(Giv Container 'className="d-flex flex-wrap' så knapper ikke skaber 'overflow')
      
      Læg mærke til, at dummy-array rummer gentagelser. Det afspejler irl-situationen, hvor blog-skribent opretter emner, der allerede er oprettet under andre blog-indlæg, og altså giver dubletter af søge-knapper.
      
      Nu renser vi 'dummy'-array for dubletter - alle blogposts med pågældende emne bliver jo fremvist ved klik på pågældende emne-knap.
      
      Vi bruger new Set() metoden, til at skabe et array af unikke emner.
      
      
      const allSubjects = [
          "react",
          "react-bootstrap",
          "react-router",
          "react-router",
          "github",
          "github",
          "github-pages",
          "git",
        ];
      
      const uniqueSubjects = [...new Set(allSubjects)];
        const subjectButtons = uniqueSubjects.map((subject) => (
          <Button variant="secondary" className="m-2">
            {subject}
          </Button>
        ));
      
      Bemærk, at new Set() konverteres til et array (frem for object)  via 'spread-operator, ...' 
      
      Nu får vi en række af unikke emne-knapper, men de skal forbindes til bloggens 'data-base'. I data.js (vores dummy-data-base) skriver vi en funtion, der henter 'allSubjects', der er et rigtigt bruger-genereret array, og erstatter dummy-array.
      
      Færdig!
      
      `,
    author: "Nils-Kristian Pedersen",
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPost(number) {
  return blogPosts.find((blogPost) => blogPost.number === number);
}

export function getAllSubjects() {
  const allSubjects = blogPosts.map((a) => a.subject);
  return allSubjects;
}
