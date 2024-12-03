import { FaTrash } from "react-icons/fa";

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button data-testid="delete-button" type="button" onClick={onClick}>
      <FaTrash fill="#C63143" width={24} height={24} />
    </button>
  );
}
