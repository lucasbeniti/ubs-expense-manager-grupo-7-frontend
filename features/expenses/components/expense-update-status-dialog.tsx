import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { EXPENSE_STATUS_FLOW } from '../constants'
import { IExpense } from '../types'
import { updateExpenseStatus } from '../api'

interface ExpenseUpdateStatusDialogProps {
  expense: IExpense
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const handleUpdateExpenseStatus = async (
  expense: IExpense,
  action: 'approve' | 'reject'
) => {
  const nextStatus =
    action === 'approve'
      ? EXPENSE_STATUS_FLOW[expense.status].next
      : EXPENSE_STATUS_FLOW[expense.status].reject

  if (!nextStatus) {
    throw new Error(
      `Despesa no status ${expense.status} não pode ser ${action === 'approve' ? 'aprovada' : 'reprovada'}`
    )
  }

  return updateExpenseStatus(expense.expense_id, nextStatus)
}

const ExpenseUpdateStatusDialog = ({
  expense,
  open,
  onOpenChange,
}: ExpenseUpdateStatusDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Atualizar status da despesa</DialogTitle>
        </DialogHeader>

        <p className="text-muted-foreground text-sm">Selecione uma ação para esta despesa.</p>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button onClick={() => handleUpdateExpenseStatus(expense, 'approve')}>Reprovar</Button>

          <Button
            className="bg-green-600 text-white hover:bg-green-600/90 focus:ring-green-600"
            onClick={() => handleUpdateExpenseStatus(expense, 'reject')}
          >
            Aprovar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseUpdateStatusDialog
