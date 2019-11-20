Module built for solving the pagination based on API in react.

## Available Scripts

In the project directory, you can run:

### `yarn add react-api-pagination`
or 
### `npm install react-api-pagination --save`

## Use 

`import ApiPagination from 'react-api-pagination'`
```
// call method to save the data into the state
  setComments = (data) => {
    this.setState({ comments: data })
  }

  <!-- Inside the render() method -->
  <!-- Set Props -->
    const paginationConfig = {
      url: 'domain.com/comment/show/PAGE_ID`,
      getData: this.setComments,
      previousLabel: (
        <Fragment>
          <ArrowLeft /> // Left Icon (you can add your own)
          Previous Page
        </Fragment>
      ),
      nextLabel: (
        <Fragment>
          Next Page
          <ArrowRight /> // Left Icon (you can add your own)
        </Fragment>
      )
    };


  <!-- return function -->
  <ApiPagination {...paginationConfig} />
```






## For Unstalling
### `npm uninstall react-api-pagination`

**Note: this module built by using Axios and CRA!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

