
const FullName =(props)=> {
    return (
        <div className="infoPerso">
        <div className="text">
          <h2>Who am I ?</h2>
          <h1>I'm {props.dataOne.fullName}</h1>
          <p>{props.dataOne.bio}</p>
        </div>
        <div className="info">
          <ul>
            <li><strong>Name:</strong><br/>{`${props.dataOne.name}`}</li>
            <li><strong>From:</strong><br/>{`${props.dataOne.from}`}</li>
            <li><strong>Email:</strong><br/>{`${props.dataOne.email}`}</li>
            <li><strong>GitHub:</strong><br/>{`${props.dataOne.gitHub}`}</li>
          </ul>
        </div>
      </div>
    )
}

export default FullName