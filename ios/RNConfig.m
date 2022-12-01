//
//  RNConfig.m
//  Flavor
//
//  Created by Yusuf Saifudin on 01/12/22.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env=@"dev";
#elif PROD
  NSString *env=@"prod";
#elif DEBUG
  NSString *env=@"staging";
#else
  NSString *env=@"prod";
#endif
  return @{ @"env":env};
}
+ (BOOL)requireMainQueueSetup
{
  return YES;
}
@end
