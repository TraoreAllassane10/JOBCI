import Nav from "./Nav"

const Hero = () => {
  return (
    <div className="bg-(--color-secondary) h-70">
        <Nav/>
        <h1 className="text-2xl md:text-5xl font-bold text-white mx-5 md:max-w-7xl md:mx-auto my-12">Trouver un emploi à proximité</h1>
    </div>
  )
}

export default Hero
