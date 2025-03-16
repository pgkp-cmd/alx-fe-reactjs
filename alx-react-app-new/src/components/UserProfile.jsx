const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      maxWidth: '300px'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '0.5rem' }}>{props.name}</h2>
      <p style={{ margin: '0.3rem 0' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ margin: '0.3rem 0' }}>Bio: {props.bio}</p>
    </div>
  );
};