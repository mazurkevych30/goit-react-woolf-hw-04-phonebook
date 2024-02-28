import css from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p>
              <button onClick={() => handleDelete(id)} className={css.button}>
                delete
              </button>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
