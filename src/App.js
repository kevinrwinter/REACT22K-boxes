import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const persons = [
  {
    name: "Yoshimitsu",
    title: "Ninja",
    age: 42,
    languages: [{ name: "English" }, { name: "Japanese" }, { name: "Finnish" }],
  },
  {
    name: "Ryu Hayabusa",
    title: "Ninja",
    age: 42,
    languages: [{ name: "English" }, { name: "Japanese" }, { name: "Finnish" }],
  },
  {
    name: "Joe Musashi",
    title: "Ninja",
    age: 42,
    languages: [{ name: "English" }, { name: "Japanese" }, { name: "Finnish" }],
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* <main className="cards-container">
        <Box name={persons[0].name} title={persons[0].title} age={persons[0].age} />
        <Box name={persons[1].name} title={persons[1].title} age={persons[1].age} />
        <Box name={persons[2].name} title={persons[2].title} age={persons[2].age} />
        <Box name="Link" title="Hyrulian" age="42" />
        <Box name="Ganon" title="Gerudo" age="42" />
      </main> */}

      <main className="cards-container">
        {persons.map((person) => (
          <Box
            key={person.name}
            name={person.name}
            title={person.title}
            age={person.age}
            languages={person.languages.map((language) => (
              <p key={language.id}>{language.name}</p>
            ))}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default App;
