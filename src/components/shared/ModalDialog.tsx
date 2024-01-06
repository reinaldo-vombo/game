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
         <AlertDialogTrigger aria-label="image icon" className={className}>
            {image}
         </AlertDialogTrigger>
         <AlertDialogContent className="bg-black border-slate-700">
            <div className="flex items-center justify-center">
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
