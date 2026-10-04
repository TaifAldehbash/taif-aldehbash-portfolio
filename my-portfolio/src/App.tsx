import { profile } from './content/profile'
import { featuredProjects } from './content/projects'

// Temporary placeholder while the design is being built out.
function App() {
  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.tagline}</p>
      <ul>
        {featuredProjects.map((p) => (
          <li key={p.slug}>{p.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
