import { useEffect, useRef } from 'react';

export const useDialogFocus = (open: boolean, onClose: () => void) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusableElements = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]'
    ) ?? []).filter((element) => element.getClientRects().length > 0);
    (dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]') ?? focusableElements()[0])?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
      }
      if (event.key !== 'Tab') return;
      const elements = focusableElements();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [open]);

  return dialogRef;
};
