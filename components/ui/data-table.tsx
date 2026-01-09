'use client'

import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  FilterFn,
  ColumnFiltersState,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from './button'
import { ReactNode, useState } from 'react'
import { Input } from './input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  actions?: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColumnLabel = (column: any): ReactNode => {
  const header = column.columnDef.header

  if (typeof header === 'string') {
    return header
  }

  if (typeof header === 'function') {
    return flexRender(header, { column })
  }

  return column.id
}

function normalize(value: unknown) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalFilterFn: FilterFn<any> = (row, columnId, filterValue) => {
  const value = row.getValue(columnId)

  if (value == null) return false

  return normalize(value).includes(normalize(filterValue))
}

export function DataTable<TData, TValue>({
  columns,
  data,
  actions,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn,
    state: {
      columnVisibility,
      columnFilters,
      globalFilter,
    },
  })

  return (
    <div>
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder="Busque por qualquer dado..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Editar Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {getColumnLabel(column)}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        {actions}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <span className="text-muted-foreground text-sm">
          Exibindo {table.getFilteredRowModel().rows.length} de{' '}
          {table.getCoreRowModel().rows.length}{' '}
          {table.getCoreRowModel().rows.length > 1 ? 'registros' : 'registro'}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-muted-foreground mr-5 text-sm whitespace-nowrap">
            Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
          </span>

          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
