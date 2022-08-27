import { FiPlus, FiX, FiCheck } from "react-icons/fi"
import { Container } from "./styles"

export function TagItem({
  isNew = false,
  value,
  onClick,
  selected = false,
  ...rest
}) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <input
          type="text"
          value={value}
          readOnly={!isNew}
          placeholder="New tag"
          {...rest}
        />
      ) : (
        <span>{value}</span>
      )}

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : selected ? <FiCheck id="checked" /> : <FiX />}
      </button>
    </Container>
  )
}
