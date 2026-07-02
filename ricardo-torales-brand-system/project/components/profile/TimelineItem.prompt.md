# TimelineItem

One entry on the experience timeline — dot, company + role, period pill, italic context, achievement bullets. Set `current` to highlight the active role. Composes `Badge`.

```jsx
<div style={{ position:'relative', paddingLeft:32 }}>
  <TimelineItem
    current
    company="Grupo Chacomer"
    role="Gerente de Proyectos de Tecnología"
    period="2026 – Actualidad"
    context="Grupo empresarial líder en Paraguay"
    bullets={['Dirección estratégica de la transformación digital…']}
  />
</div>
```

Wrap the list in a relatively-positioned container with a 2px left rail (`linear-gradient(to bottom, var(--navy-800), var(--border-default))`).
