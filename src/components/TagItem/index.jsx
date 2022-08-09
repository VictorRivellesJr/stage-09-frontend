import { Container } from "./styles"
import { FiPlus, FiX } from "react-icons/fi"

export function TagItem({ isNew, title, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <input
          type="text"
          value={title}
          readOnly={!isNew}
          placeholder="New tag"
          {...rest}
        />
      ) : (
        <span>{title}</span>
      )}

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
