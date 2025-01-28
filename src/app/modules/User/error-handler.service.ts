import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private toast: ToastrService) {}

  handleErrorResponse(err: any): void {
    const errorResponse = err.error;

    // Handle business error descriptions
    if (errorResponse.businessErrorDescription) {
      this.toast.error(errorResponse.businessErrorDescription, 'Error');
    }

    // Handle validation errors
    if (errorResponse.validationErrors && errorResponse.validationErrors.length > 0) {
      errorResponse.validationErrors.forEach((validationError: string) => {
        this.toast.error(validationError, 'Validation Error');
      });
    }

    // Handle generic errors
    if (errorResponse.error) {
      this.toast.error(errorResponse.error, 'Error');
    }

    // Default fallback for unknown errors
    if (
      !errorResponse.businessErrorDescription &&
      !errorResponse.validationErrors &&
      !errorResponse.error
    ) {
      this.toast.error('An unexpected error occurred.', 'Error');
    }
  }
}