function Package(){
    return (
        <>
            <div className="mt-2">
          <h3>Import Something from 'package' VS Import &#123;Something&#125; from 'package'</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="text-center fs-5">
                <tr>
                  <th>Import Something from 'package'</th>
                  <th>Import &#123;Something&#125; from 'package'</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>When there is a single funtion imported then this syntax of import will be used and this will also work when we make some spelling mistake when recalling component in import line because default component name will automatically be imported.</td>
                  <td>When we need to import more than one function from a file then this version of import syntax will be followed and this will not work when there is a spelling mistake in recalling any of the component name. </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default Package;