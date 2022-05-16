import { parseISO } from "date-fns";
import { formatCpfCnpj } from "../../lib/utils/formatCpfCnpj";
import { TextField } from "../TextField";

type CustomerInfoProps = {
    customer: any
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
    customer
}) => {
    return (
        <div>
            <TextField title='Nome' value={customer.nome} />
            <TextField
                title='Data'
                value={parseISO(customer.data).toLocaleDateString()} />
            <TextField
                title='Documento'
                value={formatCpfCnpj(customer.documento)} />
            <TextField title='Banco' value={customer.banco} />
            <TextField title='Agência' value={customer.agencia} />
            <TextField title='Conta' value={customer.conta} />
        </div>
    )
}

export { CustomerInfo }