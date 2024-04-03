import { Meta, StoryFn } from "@storybook/react";
import TableStories from "./TableStories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface Args {
   pageSize: number;
}

export default {
   title: "TableStories",
   component: TableStories,
   argTypes: {
      pageSize: {
         control: { type: "number" },
      },
   },
   decorators: [
      (StoryComponent) => (
         <QueryClientProvider client={queryClient}>
            <StoryComponent />
         </QueryClientProvider>
      ),
   ],
} as Meta;

const Template: StoryFn<Args> = ({ pageSize }: { pageSize: number }) => {
   return <TableStories pageSize={pageSize} />;
};

export const Primary = Template.bind({});
Primary.args = {
   pageSize: 10,
};
