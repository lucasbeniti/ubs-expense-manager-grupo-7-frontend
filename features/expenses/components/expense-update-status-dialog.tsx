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

export const approveExpense = async (expense: IExpense) => {
  const next = EXPENSE_STATUS_FLOW[expense.status].next

  if (!next) {
    throw new Error(`Despesa no status ${expense.status} não pode ser aprovada`)
  }

  return updateExpenseStatus(expense.expense_id, next)
}

export const rejectExpense = async (expense: IExpense) => {
  const reject = EXPENSE_STATUS_FLOW[expense.status].reject

  if (!reject) {
    throw new Error(`Despesa no status ${expense.status} não pode ser reprovada`)
  }

  return updateExpenseStatus(expense.expense_id, reject)
}

const ExpenseUpdateStatusDialog = ({ open, onOpenChange }: ExpenseUpdateStatusDialogProps) => {
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

          <Button>Reprovar</Button>

          <Button className="bg-green-600 text-white hover:bg-green-600/90 focus:ring-green-600">
            Aprovar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseUpdateStatusDialog
