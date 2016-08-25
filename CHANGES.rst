Changelog
=========


1.2 (unreleased)
----------------

- Avoid an error if Faceted namespace is not defined
  [mpeeters]

- Add a select2 single select widget
  [mpeeters]

- Wrap JS select2 initialization method under name `initializeSelect2Widgets`
  so it can be called from somewhere else if necessary (like when the select2
  widget is displayed in an overlay)
  [gbastien]

1.1 (2016-07-07)
----------------

- Use faceted-select2-widget instead of faceted-select-widget to not break
  the original faceted-select-widget widget.
  [vincentfretin]

- Depends on eea.jquery >= 8.8 to fix images in select2.
  [vincentfretin]

- Replace collective.taxonomy.widget.TaxonomySelectFieldWidget by the widget
  from this package.
  [vincentfretin]

- Initialize widgets in overlays now.
  [vincentfretin]


1.0 (2016-04-20)
----------------

- Initial release.
  [vincentfretin]
