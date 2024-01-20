
// eslint-disable-next-line react/prop-types
const TitleBar = ({name}) => {
  return (
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">{name}</h1>
          </div>
        </div>
      </div>
  )
}

export default TitleBar