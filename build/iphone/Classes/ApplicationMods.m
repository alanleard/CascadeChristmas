#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"paint",@"name",@"ti.paint",@"moduleid",@"1.0",@"version",@"43f13063-d426-4e9c-8a7a-72dc5e4aec57",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
