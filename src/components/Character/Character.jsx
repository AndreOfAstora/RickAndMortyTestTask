

const Character = (props) => {
  const { name, status } = props.character;

  return (
    <p>
      {name + ' ' + status}
    </p>
  )
}

export default Character;