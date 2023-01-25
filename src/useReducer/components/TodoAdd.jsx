import useForm from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { desc, onInputChange, onRestForm } = useForm({
    desc: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (desc.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false,
    };
    console.log(newTodo);
    onNewTodo(newTodo);
    onRestForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Qué hay que hacer"
        name="desc"
        value={desc}
        onChange={onInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
