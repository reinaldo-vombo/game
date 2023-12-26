import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { IModalDialog } from "@/interface/product"

const ModalDialog = ({ children, className, image }: IModalDialog) => {
   return (
      <AlertDialog>
         <AlertDialogTrigger className={className}>
            {image}
         </AlertDialogTrigger>
         <AlertDialogContent className="bg-black border-slate-700">
            <div>
               {children}
            </div>
            <AlertDialogFooter>
               <AlertDialogCancel className="border-slate-700 hover:primary">Cancel</AlertDialogCancel>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   )
}

export default ModalDialog
