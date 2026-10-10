<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the imported salon page sections and booking components within TanStack file routes; the archive is the structural source, not a fresh redesign.
- Keep verified business facts and request URL construction in one browser-safe salon module so all buttons use the same contact and service definitions.
- Appointment requests deliberately open the client's WhatsApp and require salon confirmation; do not replace this flow with stored leads or automatic messaging.
- Store optimized photos as project-local public image files for portable hosting; downloaded source bytes remain temporary, and no prior-project asset pointers are reused.
- Keep photographic portfolio evidence separate from services without verified images so portraits and promotional graphics cannot be misrepresented as service results.
