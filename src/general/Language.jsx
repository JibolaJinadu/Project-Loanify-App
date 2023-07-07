export default function Language(props) {
  return (
    <select id="cars" name="language" className="language">
      <option value="">Select a language</option>
      <option value="English">English</option>
      <option value="Youruba">Youruba</option>
      <option value="Igbo">Igbo</option>
      <option value="Hausa">Hausa</option>
      <option value="French">French</option>
      <option value="Spanish">Spanish</option>
    </select>
  );
  // <in>{props.name}</in>;
}
