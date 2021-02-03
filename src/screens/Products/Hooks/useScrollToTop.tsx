import { FlatList } from "react-native";
import { useRef, useEffect } from "react";

export default function useScrollToTop<ListItem>({ navigation }: any) {
  const listRef = useRef<FlatList<ListItem>>(null);

  function scrollToTop() {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }

  useEffect(() => {
    navigation.setParams({ scrollToTop });
  }, [listRef.current]);

  return listRef;
}

/**
 *
 *  @see
 *  NOTE:
 *  the built(the one that comes from react navigation) in useScrollToTop
 *  will not work if your TabNavigator is within a StackNavigator.
 *
 */

/**
 * @template
 * Usage:
 *  const listRef = useScrollToTop<ListItem>(navigation)
 *  return
 * (<FlatList ref={listRef} />);
 */

/** @template
 * defaultNavigationOptions: {
//     tabBarOnPress: ({ navigation, defaultHandler }) => {
//         defaultHandler();

//         // When on a screen and pressing the tab again, try to scroll to the top
//         if (navigation.isFocused()) {
//             const scrollToTop = navigation.getParam('scrollToTop', null);

//             if (scrollToTop) {
//                 scrollToTop();
//             }
//         }
//     },
// },
*/
