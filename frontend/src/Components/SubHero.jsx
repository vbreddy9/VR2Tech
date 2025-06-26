import './SubHero.css';

function SubHero(props) {
  return (
    
    <div className={props.sName}>
      <div className="hero-title">
        <h1>{props.sText}</h1>
        <h6 style={{ marginRight: '10px', color: 'brown' }}>{props.subtitle}</h6> 
        <p>{props.paragraph}</p> 
      </div>
    </div>
  );
}

export default SubHero;
