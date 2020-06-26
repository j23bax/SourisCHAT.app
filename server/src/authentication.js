const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');

const { OAuthStrategy, expressOauth } = require('@feathersjs/authentication-oauth');

class GithubStrategy extends OAuthStrategy {
  async getEntityQuery(profile) {
    return {
      githubId: profile.id
    };
  }
  async getEntityData(profile) {
    const {
      login: githubUsername,
      id: githubId,
      name,
      avatar_url: image
    } = profile;
    
    return {
      githubUsername,
      githubId,
      name,
      image
    };
  }
}

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('github', new GithubStrategy());


  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
