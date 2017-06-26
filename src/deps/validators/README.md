problem:
  - naming and file count for validator + schema was becoming bad
  - too many 'factories'
  - logic for core was in deps where it should not be
  - method chain was too big
  - file size was too big
  - external configuration was not so easy
solution:
  - move all domain logic related to methodchain out of deps
  - plugins for method chain
  -
