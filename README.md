# CF-User Info (BTP)
This project is a small one for utility of extracting anyones token on BTP CF.

Deployment:
	
	cf push

Usage:

1. Create a Destination only with the property (No Auth needed)
`forwardAuthToken=true`
2. On the xs-app.json
	Just create a route to the destination with nothing else
