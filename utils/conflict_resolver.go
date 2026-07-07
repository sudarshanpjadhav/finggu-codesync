package utils

func finggu_conflictResolverFn(baseVersion string, incomingVersion string) (string, error) {
	// Conflict resolution logic
	if baseVersion == incomingVersion {
		return baseVersion, nil
	}
	return incomingVersion, nil
}