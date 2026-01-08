import { api } from '@/lib/http/api'
import { IExpense, CreateExpenseDTO, UpdateExpenseDTO } from './types'

// Dados mockados temporários
let mockExpenses: IExpense[] = [
  {
    id: '1',
    amount: 150.50,
    date: '2024-01-15',
    description: 'Almoço com cliente',
    category_id: '1',
    category: { id: '1', name: 'Alimentação' },
    employee_id: '1',
    employee: { id: '1', name: 'João Silva', email: 'joao@empresa.com' },
    department: { id: '1', name: 'Tecnologia da Informação' },
    status: 'approved',
    created_at: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    amount: 89.90,
    date: '2024-01-16',
    description: 'Combustível',
    category_id: '2',
    category: { id: '2', name: 'Transporte' },
    employee_id: '2',
    employee: { id: '2', name: 'Maria Santos', email: 'maria@empresa.com' },
    department: { id: '2', name: 'Recursos Humanos' },
    status: 'pending',
    created_at: '2024-01-16T14:20:00Z',
  },
  {
    id: '3',
    amount: 250.00,
    date: '2024-01-17',
    description: 'Material de escritório',
    category_id: '4',
    category: { id: '4', name: 'Educação' },
    employee_id: '3',
    employee: { id: '3', name: 'Pedro Oliveira', email: 'pedro@empresa.com' },
    department: { id: '1', name: 'Tecnologia da Informação' },
    status: 'approved',
    created_at: '2024-01-17T09:15:00Z',
  },
  {
    id: '4',
    amount: 45.00,
    date: '2024-01-18',
    description: 'Estacionamento',
    category_id: '2',
    category: { id: '2', name: 'Transporte' },
    employee_id: '4',
    employee: { id: '4', name: 'Ana Costa', email: 'ana@empresa.com' },
    department: { id: '3', name: 'Financeiro' },
    status: 'rejected',
    created_at: '2024-01-18T16:45:00Z',
  },
]

export const getExpenses = async (): Promise<IExpense[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockExpenses
}

export const getExpenseById = async (id: string): Promise<IExpense> => {
  await new Promise(resolve => setTimeout(resolve, 300))
  const expense = mockExpenses.find(exp => exp.id === id)
  if (!expense) throw new Error('Despesa não encontrada')
  return expense
}

export const createExpense = async (payload: CreateExpenseDTO): Promise<IExpense> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newExpense: IExpense = {
    id: String(mockExpenses.length + 1),
    ...payload,
    created_at: new Date().toISOString(),
  }
  mockExpenses.push(newExpense)
  return newExpense
}

export const updateExpense = async (
  id: string,
  payload: UpdateExpenseDTO
): Promise<IExpense> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const index = mockExpenses.findIndex(exp => exp.id === id)
  if (index === -1) throw new Error('Despesa não encontrada')
  
  mockExpenses[index] = {
    ...mockExpenses[index],
    ...payload,
  }
  return mockExpenses[index]
}

export const deleteExpense = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  mockExpenses = mockExpenses.filter(exp => exp.id !== id)
}