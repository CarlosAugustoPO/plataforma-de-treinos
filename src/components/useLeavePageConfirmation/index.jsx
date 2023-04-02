/**
 * Asks for confirmation to leave/reload if there are unsaved changes.
 */
import Router from 'next/router';
import { useEffect } from 'react';

export const useLeavePageConfirmation = (unsavedChanges) => {
  useEffect(() => {
    // For reloading.
    window.onbeforeunload = () => {
      if (unsavedChanges) {
        return 'É possível que as alterações feitas não sejam salvas.';
      }
    };

    // For changing in-app route.
    if (unsavedChanges) {
      const routeChangeStart = () => {
        const ok = confirm(
          'É possível que as alterações feitas não sejam salvas.',
        );
        if (!ok) {
          Router.events.emit('routeChangeError');
          throw 'Abort route change. Please ignore this error.';
        }
      };

      Router.events.on('routeChangeStart', routeChangeStart);
      return () => {
        Router.events.off('routeChangeStart', routeChangeStart);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unsavedChanges]);
};
