
import './index.css'
const ProjectsShowcase = props => {
  const {projectsDetails} = props
  const {id, imageUrl, name} = projectsDetails
  return (
    <li className="li-card">
      <img className="image" src={imageUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}

export default ProjectsShowcase
