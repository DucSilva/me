const Repositories = ({ repositories }) => (
  <section id="repositories">
    <div className="wrapper">
      <h1 className="repositories-title">Repositories</h1>

      <div className="repositories-container">
        {repositories.map(repository => (
          <div className="repository-card">
            <div className="repository-card-top">
              <a
                className="repository-title"
                href={repository.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repository.name}
              </a>
              <p className="repository-description">{repository.description}</p>
            </div>

            <div className="repository-card-bottom">
              <div className="repository-extra-info">
                <p>{repository.language}</p>
                <p>Stars: {repository.starsCount}</p>
                <p>Watchers: {repository.watchersCount}</p>
                <p>Forks: {repository.forksCount}</p>
              </div>

              <div className="repository-updated-info">
                <p>Updated {repository.updatedDistance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Repositories;
