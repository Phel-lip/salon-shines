import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { BookingModal } from '@/components/BookingModal';
import { buildWhatsAppUrl, SERVICES } from '@/lib/salon';

afterEach(cleanup);
describe('WhatsApp appointment request', () => {
  it('keeps optional preferences optional and leaves confirmation to the salon', () => {
    const url = new URL(buildWhatsAppUrl({ service: 'Manicure', pro: '', date: '', period: '', notes: '' }));
    expect(url.hostname).toBe('wa.me');
    expect(url.pathname).toBe('/5566992105483');
    expect(url.searchParams.get('text')).toContain('• Data preferida: A combinar');
    expect(url.searchParams.get('text')).toContain('• Período preferido: A combinar');
    expect(url.searchParams.get('text')).toContain('Aguardo a confirmação da disponibilidade.');
  });
  it('preserves optional date, period and special characters', () => {
    const url = new URL(buildWhatsAppUrl({ service: 'Corte feminino', pro: '', date: '2026-10-20', period: 'Tarde', notes: '  Corte & ondas #natural  ' }));
    expect(url.searchParams.get('text')).toContain('20/10/2026');
    expect(url.searchParams.get('text')).toContain('• Observação: Corte & ondas #natural');
  });
  for (const service of SERVICES) {
    it(`keeps ${service.id} selected when opening WhatsApp`, () => {
      render(<BookingModal open initialService={service.id} onClose={() => {}} />);
      fireEvent.click(screen.getByRole('button', { name: 'Ver resumo' }));
      const url = new URL(screen.getByTestId('wa-link').getAttribute('href') ?? '');
      expect(url.searchParams.get('text')).toContain(`• Serviço: ${service.title}`);
    });
  }
});